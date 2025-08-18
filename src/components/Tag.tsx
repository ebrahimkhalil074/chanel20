interface TagProps {
  tag: string;
  bgColor?: string;      // eg: 'bg-green-500'
  borderColor?: string;  // eg: 'border-green-500'
}

const Tag = ({
  tag,
  bgColor = "bg-red-500",
  borderColor = "border-red-500",
}: TagProps) => {
  return (
    <div>
      <div className={`inline-block text-white px-2 py-1 text-sm font-semibold ${bgColor}`}>
        {tag}
      </div>
      <div className={`border-t-2 ${borderColor}`} />
    </div>
  );
};

export default Tag;
