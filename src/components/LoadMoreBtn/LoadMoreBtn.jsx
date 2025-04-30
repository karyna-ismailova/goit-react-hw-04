import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ page, setPage }) => {
  return (
    <div>
      <button className={s.button} onClick={() => setPage(page + 1)}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
