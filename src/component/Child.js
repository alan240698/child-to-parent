function Child(props) {
  const sendData = () => {
    props.parentCallback("Đây là những gì mà con muốn gởi đến cha");
  };

  return (
    <div>
      <p>{sendData()}</p>
    </div>
  );
}
export default Child;
