import "./Team.scss";

interface Team { 
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
}

const Team = ({ teamMemberInfo }: { teamMemberInfo: Team[]}) => {
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
