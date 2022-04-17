import Icon from "@ant-design/icons";

const Plane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
    <path d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z"></path>
  </svg>
);

const PlaneIcon = (props) => <Icon component={Plane} {...props} />;

export default PlaneIcon;
