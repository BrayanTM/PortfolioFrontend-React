export const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col items-center justify-center bg-slate-300 p-4 text-center text-sm text-gray-600 dark:bg-gray-950 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} José Tebelán. {` `}
          </p>
        </div>
      </footer>
    </>
  );
};
