// import React from "react";

// import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {
//   return (
//     <div className={styles.container}>
//       <img
//         src={getImageUrl(imageSrc)}
//         alt={`Image of ${title}`}
//         className={styles.image}
//       />
//       <h3 className={styles.title}>{title}</h3>
//       <p className={styles.description}>{description}</p>
//       <ul className={styles.skills}>
//         {skills.map((skill, id) => {
//           return (
//             <li key={id} className={styles.skill}>
//               {skill}
//             </li>
//           );
//         })}
//       </ul>
//       <div className={styles.links}>
//         <a href={demo} className={styles.link}>
//           Demo
//         </a>
//         <a href={source} className={styles.link}>
//           Source
//         </a>
//       </div>
//     </div>
//   );
// };
// import * as React from 'react';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";


export default function ProjectCard({project: { title, imageSrc, description, skills, demo },}) {
    console.log(demo)
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Apply scroll reveal to this component
    sr.reveal('.reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      viewFactor: 0.2,
      reset: true
    });
  },[]);
  return (
    <Card sx={{ maxWidth: 345,height: '600px' , background: 'linear-gradient(180deg, #576cbc 0%, #aaadb3 100%)'}}  className={`${styles.container} reveal`} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        sx={{ width: '100%' }}
        image={getImageUrl(imageSrc)}
      />
      <CardContent sx={{ maxHeight: '250px', overflowY: 'auto' }} className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2, fontWeight: 'bold' }}>
          Skills:
        </Typography>
        <ul className={styles.skills}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              <Typography variant="body2" >
                {skill}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions>
      <a size="small" href={demo} target="_blank" className={styles.demobtn}>Demo</a>
      </CardActions>
    </Card>
  );
}
