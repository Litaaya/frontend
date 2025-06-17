import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

export default function fashionanalyze() {
  const [file, setFile]     = useState(null)
  const [result, setResult] = useState(null)

  const onDrop = useCallback((accepted) => {
    const f = Object.assign(accepted[0], {
      preview: URL.createObjectURL(accepted[0]),
    })
    setFile(f)
    setResult(null)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png':  ['.png'],
      'image/webp': ['.webp']
    }
  })

  // Remove the selected image
  const removeImage = () => {
    if (file && file.preview) URL.revokeObjectURL(file.preview)
    setFile(null)
    setResult(null)
  }

  const analyze = async () => {
    const form = new FormData()
    form.append('file', file)
    const { data } = await axios.post('https://litaaya-ts.hf.space/analyze', form)
    setResult(data)
  }

  return (
    <section id="ai" className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Upload area */}
        <div
          {...getRootProps()}
          className="relative flex-1 border-2 border-dashed border-pastelgray bg-pastelwhite rounded-lg p-6 text-center hover:border-pastelaccent transition"
        >
          <input {...getInputProps()} />

          {file ? (
            <div className="relative">
              <img
                src={file.preview}
                alt="preview"
                className="rounded-lg w-full object-contain max-h-64"
              />
              <button
                onClick={removeImage}
                className="
                  absolute -top-4 -right-3
                  w-8 h-8
                  flex items-center justify-center
                  bg-white border border-gr ay-300
                  rounded-full shadow-md
                  hover:bg-gray-50
                  focus:outline-none
                "
              >
                <span className="text-gray-600 text-lg">&times;</span>
              </button>
            </div>
          ) : (
            <p className="text-secondary">
              Your Image Here<br />
              (JPG, PNG, WEBP)
            </p>
          )}
        </div>

        {/* Controls & result */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <button
            onClick={analyze}
            disabled={!file}
            className="btn bg-pastelaccent text-black border-0 hover:bg-pastelaccent/90"
          >
            Analyze
          </button>
          {result && (
            <div className="bg-pastelbg p-6 rounded-lg shadow text-black">
              <p>
                <strong className="text-black">Label:</strong> {result.predicted_class}
              </p>
              <p>
                <strong className="text-black">Confidence:</strong>{' '}
                {(result.probabilities?.[result.predicted_class] * 100).toFixed(1)}%
              </p>
              <p>
                <strong className="text-black">Closer to:</strong> {result.trend_score?.closer_to}
              </p>
              <p>
                <strong className="text-black">Similarity:</strong>{' '}
                Runway: {Math.round(result.trend_score?.runway_similarity * 100)}% |{' '}
                Publications: {Math.round(result.trend_score?.publications_similarity * 100)}%
              </p>
              <p>
                <strong className="text-black">Trend:</strong>{' '}
                {result.trend_score?.assessment === "MAYBE" ? (
                  <span className="ml-2 badge badge-warning">🤔 Maybe 🤔</span>
                ) : (
                  <span className="ml-2 badge badge-ghost">It is really hard bro</span>
                )}
              </p>

            </div>
          )}
        </div>
      </div>
    </section>
  )
}
