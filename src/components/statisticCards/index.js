import { Card, CardContent, Divider, Typography } from "@mui/material";

const MediaCard = ({ chartData, chartComponent, cardTitle, cardSubtitle,body }) => {
  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {chartComponent({ data: chartData })}
        <br/>
        <Typography variant="h5" component="h2" style={{ marginRight: 16 }}>
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {cardSubtitle}
        </Typography>
        <hr/>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
