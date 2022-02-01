/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Guest = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={name} size="sm" /> */}
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
  return {
    columns: [
      { Header: "name", accessor: "name", align: "left" },
      { Header: "buildingno", accessor: "buildingno", align: "center" },
      { Header: "roomno", accessor: "roomno", align: "center" },
      { Header: "bedno", accessor: "bedno", align: "center" },
      { Header: "transactionamount", accessor: "transactionamount", align: "center" },
      { Header: "dueamount", accessor: "dueamount", align: "center" },
      { Header: "transactiontype", accessor: "transactiontype", align: "center" },
      { Header: "transactionid", accessor: "transactionid", align: "center" },
      { Header: "transactiondate", accessor: "transactiondate", align: "center" },
    ],

    rows: [
      {
        name: <Guest name="Michael" />,
        buildingno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Four
          </MDTypography>
        ),
        roomno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Four
          </MDTypography>
        ),
        bedno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Four
          </MDTypography>
        ),
        transactionamount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
        dueamount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
        transactiontype: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            UPI
          </MDTypography>
        ),
        transactionid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            674026896
          </MDTypography>
        ),
        transactiondate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23-08-2021
          </MDTypography>
        ),
      },
      {
        name: <Guest name="John" />,
        buildingno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Four
          </MDTypography>
        ),
        roomno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Four
          </MDTypography>
        ),
        bedno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Four
          </MDTypography>
        ),
        transactionamount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
        dueamount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
        transactiontype: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            UPI
          </MDTypography>
        ),
        transactionid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            124456456757
          </MDTypography>
        ),
        transactiondate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23-08-2021
          </MDTypography>
        ),
      },
      {
        name: <Guest name="Michael" />,
        buildingno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Five
          </MDTypography>
        ),
        roomno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Five
          </MDTypography>
        ),
        bedno: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Five
          </MDTypography>
        ),
        transactionamount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2000
          </MDTypography>
        ),
        dueamount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        transactiontype: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            UPI
          </MDTypography>
        ),
        transactionid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8976594844356755
          </MDTypography>
        ),
        transactiondate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            25-08-2021
          </MDTypography>
        ),
      },
    ],
  };
}
