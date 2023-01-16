import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProgressBar(props) {
  return (
    <div className="relative">
      <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
            <LinearProgress variant="determinate" value={props.value} />
          </Box>
          <Box sx={{ minWidth: 50 }}>
            <Typography variant="body2">{`${Math.round(
              props.value
            )}%`}</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}
