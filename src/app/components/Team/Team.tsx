import "./Team.scss";

const teamMemberInfo = [
  {
    id: 1,
    name: "John Smith",
    designation: "Designation here",
    image: "/images/Team1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    id: 2,
    name: "Elina Williams",
    designation: "Designation here",
    image: "/images/Team2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    id: 3,
    name: "John Smith",
    designation: "Designation here",
    image: "/images/Team3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

const Team = () => {
  return (
    <div className="team">
      <h3>Team</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <ul>
        {teamMemberInfo.map(({ id, image, name, designation, description }) => (
          <li key={id}>
            <div className="team-member-info">
              <div className="member-image">
                <img src={image} alt={`Image of ${name}`} />
              </div>
              <p className="member-name-designation">
                <span className="name">{name}</span>
                <span className="designation">{designation}</span>
              </p>
            </div>
            <div className="team-member-description">{description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
