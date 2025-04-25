"use client"

interface ScrollingImagesProps {
  upwardImages: string[]
  downwardImages: string[]
}

export default function ScrollingImages({
  upwardImages = [
    "/scroll/1.png?height=600&width=400",
    "/scroll/2.png?height=600&width=400",
    "/scroll/3.png?height=600&width=400",
    "/scroll/4.png?height=600&width=400",
  ],
  downwardImages = [
    "/scroll/5.png?height=600&width=400",
    "/scroll/6.png?height=600&width=400",
    "/scroll/7.png?height=600&width=400",
    "/scroll/8.png?height=600&width=400",
  ],
}: ScrollingImagesProps) {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="w-1/2 relative overflow-hidden">
        <div className="flex flex-col animate-scroll-up">
          {[...upwardImages, ...upwardImages, ...upwardImages].map((src, index) => (
            <div key={`up-${index}`} className="relative w-full h-[300px] p-2">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 relative overflow-hidden">
        <div className="flex flex-col animate-scroll-down">
          {[...downwardImages, ...downwardImages, ...downwardImages].map((src, index) => (
            <div key={`down-${index}`} className="relative w-full h-[300px] p-2">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
