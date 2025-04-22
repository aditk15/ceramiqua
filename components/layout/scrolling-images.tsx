"use client"

interface ScrollingImagesProps {
  upwardImages: string[];
  downwardImages: string[];
}

export default function ScrollingImages({ 
  upwardImages = [
    "/sc1.webp?height=600&width=400",
    "/sc2.webp?height=600&width=400",
    "/sc3.webp?height=600&width=400",
    "/sc4.webp?height=600&width=400",
  ],
  downwardImages = [
    "/sc5.webp?height=600&width=400",
    "/sc6.webp?height=600&width=400",
    "/sc7.webp?height=600&width=400",
    "/sc8.webp?height=600&width=400",
  ] 
}: ScrollingImagesProps) {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="w-1/2 relative overflow-hidden">
        <div className="flex flex-col animate-scroll-up">
          {[...upwardImages, ...upwardImages, ...upwardImages].map((src, index) => (
            <div
              key={`up-${index}`}
              className="relative w-full h-[300px] p-2"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 relative overflow-hidden">
        <div className="flex flex-col animate-scroll-down">
          {[...downwardImages, ...downwardImages, ...downwardImages].map((src, index) => (
            <div
              key={`down-${index}`}
              className="relative w-full h-[300px] p-2"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}