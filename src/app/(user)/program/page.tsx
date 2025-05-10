/* eslint-disable prettier/prettier */
import CategorySection from "@/src/components/Category";

const ProgramPage = () => {
  const data = [
    { id: 1, title: "Song 1", videoUrl: "https://www.youtube.com/embed/xyz1" },
    { id: 2, title: "Song 2", videoUrl: "https://www.youtube.com/embed/xyz2" },
    { id: 3, title: "Song 3", videoUrl: "https://www.youtube.com/embed/xyz3" },
    { id: 4, title: "Match 1", videoUrl: "https://www.youtube.com/embed/abc1" },
    { id: 5, title: "Match 2", videoUrl: "https://www.youtube.com/embed/abc2" },
    { id: 6, title: "Match 3", videoUrl: "https://www.youtube.com/embed/abc3" },
  ];

  return (
    <div>
      <CategorySection categorySlug="music" items={data} title="অ্যাডায় অ্যাডায় পরামর্শ" />
      <CategorySection categorySlug="music" items={data} title="উদেক্তা গল্প" />
      <CategorySection
        categorySlug="music"
        items={data}
        title="গানে গানে আড্ডা"
      />
      <CategorySection
        categorySlug="খেলা"
        items={data}
        title="খেলায় ফিরে দেখা"
      />
    </div>
  );
};

export default ProgramPage;
