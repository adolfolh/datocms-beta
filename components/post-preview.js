
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <>
      <a href={`/posts/${slug}`} className="hover:bg-white hover:bg-opacity-10 rounded-md border-opacity-20 border-white p-2 my-2 transition-all delay-300 hover:scale-95">
        <div className="py-4 md:py-0">
          <div className="inline md:flex items-center">
            <div className="px-8 md:p-0 md:pr-8" >
              <CoverImage
                slug={slug}
                title={title}
                responsiveImage={coverImage.responsiveImage}
              />
            </div>
            <div className="w-full flex flex-col px-4 pt-4 md:p-0 md:justify-center">
              <h3 className="text-4xl mb-3 leading-snug font-accent">
                
                  <a className="hover:underline text-white">{title}</a>
                
              </h3>
              <p className="text-lg leading-relaxed opacity-60 font-thin text-white">{excerpt}</p>
            </div>
            <div className="float-right hidden md:inline mr-8">
              <svg width="36" height="22" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-accent-1" fill-rule="evenodd" clip-rule="evenodd" d="M27.3094 1.48771L28.477 4.24291C30.6388 9.34458 34.5926 13.3899 39.4888 15.6951L0 15.6951V17.1951L40.6331 17.1951C35.2104 19.3852 30.8048 23.6538 28.477 29.1473L27.3094 31.9025L28.6906 32.4877L29.8581 29.7325C32.5702 23.3322 38.3065 18.7147 45.1384 17.4322V15.958C45.0922 15.9493 45.0461 15.9405 45 15.9315V15.6951H43.9355C37.6371 14.1218 32.4095 9.6786 29.8581 3.65766L28.6906 0.902458L27.3094 1.48771Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
