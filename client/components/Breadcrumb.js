export default function Breadcrumb({categories}) {
  return (
    <div>
      {categories?.map((item, index) => {
        return (
          <div key={index}>
            <span>{item}</span>
            {index < categories.length - 1 && <span> &gt; </span>}
          </div>
        );
      })}
    </div>
  );
}
