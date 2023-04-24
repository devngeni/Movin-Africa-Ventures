import Image from "next/image";
import styles from "@/styles/Team.module.css";

function MemberCard({ member }) {
  const { name, description, bio, image } = member;
  const {
    member_card,
    onhover_membercard,
    member_card_container,
    big_image_container,
    big_image_,
    small_image_container,
    small_image,
    member_name_descrip,
    member_name,
    member_descrip,
    onhover_membercard_descrip,
    member_grid_container,
  } = styles;

  return (
    <div>
      <div className={member_card}>
        <div className={onhover_membercard}>
          <div
            className={member_name}
            style={{ position: "absolute", bottom: "-25px" }}
          >
            {name}
          </div>
          <div className={onhover_membercard_descrip}>{description}</div>
        </div>
        <div className={member_card_container}>
          <div className={big_image_container}>
            <div className={big_image_}>
              <Image src={image} alt={name} />
            </div>
          </div>
          <div className={small_image_container}>
            <div className={small_image}>
              <Image src={image} alt={name} />
            </div>
          </div>
        </div>
        <div className={member_name_descrip}>
          <div className={member_name}>{name}</div>
          <div className={member_descrip}>{bio}</div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
