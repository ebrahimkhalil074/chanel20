import MarqueAll from "@/src/components/marqueAll";

const Layout = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
        <MarqueAll />
      {children}
    </div>
  );
};

export default Layout;