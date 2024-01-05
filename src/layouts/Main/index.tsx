interface MainProps extends React.HTMLAttributes<HTMLDivElement> {}


const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <aside></aside> // add something like side-bar
      <main>
        {children}
      </main>
    </div>
  )
}

export default Main