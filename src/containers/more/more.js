import './more.scss';

function More() {

  const commonProps = {company: 'Shopify',position: 'UI/UX Engineer', duration: 'July, 2019'};

  return (
    <section className="">
      <div className="wrapper wrapper--slim">
        <h6 className="p-label-emp">BUT WAIT - </h6>
        <h2 className="mb-3 p-title">There's more</h2>
      </div>
      <div className="d-flex">
        <div className="mx-3 p-banner"></div>
        <div className="mx-3 p-banner"></div>
        <div className="mx-3 p-banner"></div>
      </div>
    </section>
  );
}

export default More;
