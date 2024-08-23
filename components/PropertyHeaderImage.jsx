import Image from "next/image"

const PropertyHeaderImage = ({image}) => {
  return (
  <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={`/images/properties/${image}`}
              alt=""
              className="object-cover h-[400px] w-full"
              height={0}
              width={0}
              sizes="100vw"
            />
          </div>
        </div>
    </section>
  )
}

export default PropertyHeaderImage