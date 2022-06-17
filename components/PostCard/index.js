import { Card } from "antd";
const { Meta } = Card;
import { useSelector } from "react-redux";

const PostCard = () => {
  const content = useSelector((state) => state.post.post[0]);
  return (
    <Card
      hoverable
      style={{
        width: 640,
        marginBottom: 80,
      }}
      cover={
        <img
          style={{ height: 300 }}
          alt="example"
          src={content.thumbnail.src}
        />
      }
      bodyStyle={{ display: "flex" }}
    >
      <Meta title={content.title} description={content.content} />
    </Card>
  );
};

export default PostCard;
