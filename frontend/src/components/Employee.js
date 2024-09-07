// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Card, CardContent, Avatar, Typography, Grid, Box, Container,CardActionArea } from '@mui/material';

// const Employee = ({id}) => {
//   const location = useLocation();
//   var employee = location.state ? location.state.employee : null;
//   if(id!=null){
    
//   }

//   if (!employee) {
//     return (
//       <Container maxWidth="md">
//         <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
//           <CardContent>
//             <Typography variant="h5" align="center">
//               No Employee Data Available
//             </Typography>
//           </CardContent>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md">
//       <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
//         <CardContent>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item>
//               <Avatar
//                 alt={employee.username}
//                 src={employee.avatarUrl} 
//                 sx={{ width: 80, height: 80 }}
//               />
//             </Grid>
//             <Grid item>
//               <Typography variant="h5">{employee.username}</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {employee.bio || 'No bio available'}
//               </Typography>
//             </Grid>
//           </Grid>
          
//           <Box mt={2}>
//             <Typography variant="body2">
//               <strong>Email:</strong> {employee.email || 'No email available'}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Location:</strong> {employee.location || 'No location available'}
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       <Box mt={5}>
//         <Typography variant="h6" align="center" gutterBottom>
//           Stats
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Driver Rating
//                   </Typography>
//                   <Typography variant="body2">
//                     {employee.rating || 'No rating available'}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div" whiteSpace={"nowrap"}>
//                     Successful Waste Pickups
//                   </Typography>
//                   <Typography variant="body2">
//                     {employee.successfulPickups || 'No data available'}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Complaints
//                   </Typography>
//                   <Typography variant="body2">
//                     {employee.complaints || 'No complaints available'}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Employee;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Avatar, Typography, Grid, Box, Container, CardActionArea } from '@mui/material';

// Function to render star rating
const renderStars = (rating) => {
  console.log(rating + " in renderStars function");
  const maxStars = 5;
  return (
    <>
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            style={{
              color: starValue <= rating ? 'gold' : 'gray',
              fontSize: '24px',
              marginRight: '2px'
            }}
          >
            &#9733;
          </span>
        );
      })}
    </>
  );
};


const Employee = ({ id }) => {
  const location = useLocation();
  const employee = location.state ? location.state.employee : null;

  if (!employee) {
    return (
      <Container maxWidth="md">
        <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
          <CardContent>
            <Typography variant="h5" align="center">
              No Employee Data Available
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                alt={employee.username}
                src={employee.avatarUrl} 
                sx={{ width: 80, height: 80 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{employee.username}</Typography>
              <Typography variant="body2" color="textSecondary">
                {employee.bio || 'No bio available'}
              </Typography>
            </Grid>
          </Grid>
          
          <Box mt={2}>
            <Typography variant="body2">
              <strong>Email:</strong> {employee.email || 'No email available'}
            </Typography>
            <Typography variant="body2">
              <strong>Location:</strong> {employee.location || 'No location available'}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box mt={5}>
        <Typography variant="h6" align="center" gutterBottom>
          Stats
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Driver Rating
                  </Typography>
                  <Box>
                    {renderStars(employee.rating || 0)}
                    <Typography variant="body2">
                      {employee.rating || 'No rating available'}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" whiteSpace={"nowrap"}>
                    Successful Waste Pickups
                  </Typography>
                  <Typography variant="body2">
                    {employee.successfulPickups || 'No data available'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Complaints
                  </Typography>
                  <Typography variant="body2">
                    {employee.complaints || 'No complaints available'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Employee;
