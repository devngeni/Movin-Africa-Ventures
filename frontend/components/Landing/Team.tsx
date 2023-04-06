import styles from "@/styles/Team.module.css";

export default function Team() {
  const {
    team_page,
    the_team,
    meet_the_team,
    member_grid_container,
    member_card,
    gridtop,
    gridbottom,
  } = styles;
  return (
    <div className={team_page}>
      <div className={the_team}>
        <div className={meet_the_team}>Meet The Team</div>
      </div>
      <div className={member_grid_container}>
        <div id={gridtop}>
          <div className={member_card}></div>
          <div className={member_card}></div>
          <div className={member_card}></div>
        </div>
        <div id={gridbottom}>
          <div className={member_card}></div>
          <div className={member_card}></div>
          <div className={member_card}></div>
        </div>
      </div>
    </div>
  );
}
