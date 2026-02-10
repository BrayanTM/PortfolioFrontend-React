export const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col items-center justify-center bg-slate-200 p-4 text-center text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} José Tebelán. {` `}
          </p>
        </div>
      </footer>
    </>
  );
};
