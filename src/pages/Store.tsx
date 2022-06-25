import storedItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

function Page() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storedItems.map(item => (
          <Col key={item.id}>
            {/* {JSON.stringify(item)} */}
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Page;
