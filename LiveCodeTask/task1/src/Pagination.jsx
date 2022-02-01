import React from 'react';

const Pagination = ({pageNumber}) => {
return (  <div className="pagination">
<button className="btn">←</button>
<span className="pagination__page">{pageNumber}</span>
<button className="btn">→</button>
</div>)

};

export default Pagination;