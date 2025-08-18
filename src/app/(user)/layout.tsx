import MarqueAll from "@/src/components/marqueAll";

const Layout = ({children}) => {
  return (
    <div>
        <MarqueAll />
      {children}
    </div>
  );
};

export default Layout;