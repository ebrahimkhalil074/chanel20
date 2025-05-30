

import CategorySection from "@/src/components/Category";

const VideoPage = () => {
  const data =  [
      { id: 1, title: 'Song 1', videoUrl: 'https://www.youtube.com/embed/xyz1' },
      { id: 2, title: 'Song 2', videoUrl: 'https://www.youtube.com/embed/xyz2' },
      { id: 3, title: 'Song 3', videoUrl: 'https://www.youtube.com/embed/xyz3' },
      { id: 4, title: 'Match 1', videoUrl: 'https://www.youtube.com/embed/abc1' },
      { id: 5, title: 'Match 2', videoUrl: 'https://www.youtube.com/embed/abc2' },
      { id: 6, title: 'Match 3', videoUrl: 'https://www.youtube.com/embed/abc3' },
    ]
  

  return (
   <div>
   {/* <Latest />
   <PopularNews /> */}
   <CategorySection categorySlug="music" items={data} title="Latest News" />
   <CategorySection categorySlug="music" items={data} title="Popular News" />
   <CategorySection categorySlug="music" items={data} title="গানে গানে আড্ডা" />
   </div>
  );
};

export default VideoPage;
