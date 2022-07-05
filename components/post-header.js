import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="overflow-hidden">
        <CoverImage
          straight
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
    </>
  );
}
