type HomeProps = {
  isActive: boolean;
  text: string;
};

export default function NavbarText( { isActive, text }: HomeProps ) {
  return (
    <button className={`flex pt-1.5 pb-1.5 pl-3 pr-3 rounded-lg gap-2.5 ${isActive ? "text-primary" : "hover:text-white"} text-xl font-medium cursor-pointer`}>
      {text}
    </button>
  );
}