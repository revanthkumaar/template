/* eslint-disable react/prop-types */

// @mui material components
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ name, email }) => (
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

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "fullname", accessor: "fullname", align: "left" },
      { Header: "contactnumber", accessor: "contactnumber", align: "center" },
      { Header: "fathername", accessor: "fathername", align: "center" },
      { Header: "fathernumber", accessor: "fathernumber", align: "center" },
      { Header: "bloodgroup", accessor: "bloodgroup", align: "center" },
      { Header: "checkindate", accessor: "checkindate", align: "center" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "occupation", accessor: "occupation", align: "center" },
      { Header: "workaddress", accessor: "workaddress", align: "center" },
      { Header: "worknumber", accessor: "worknumber", align: "center" },
      { Header: "permanentaddress", accessor: "permanentaddress", align: "center" },
      { Header: "roomrent", accessor: "roomrent", align: "center" },
      { Header: "securitydeposit", accessor: "securitydeposit", align: "center" },
      { Header: "transactionid", accessor: "transactionid", align: "center" },
      { Header: "nameofmanager", accessor: "nameofmanager", align: "center" },
    ],

    rows: [
      {
        fullname: <Project name="Jhon" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        contactnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8645433243456
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        fathername: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Abhraham
          </MDTypography>
        ),
        fathernumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8765433456
          </MDTypography>
        ),
        bloodgroup: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            B+ve
          </MDTypography>
        ),
        checkindate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23-08-2021
          </MDTypography>
        ),
        email: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            srivedaannaparthi99@gmail.com
          </MDTypography>
        ),
        occupation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Software
          </MDTypography>
        ),
        workaddress: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Hyderabad
          </MDTypography>
        ),
        worknumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            45678987654
          </MDTypography>
        ),
        permanentaddress: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Guntur
          </MDTypography>
        ),
        roomrent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6000
          </MDTypography>
        ),
        securitydeposit: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
        transactionid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            87654323456788
          </MDTypography>
        ),
        nameofmanager: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Linkan
          </MDTypography>
        ),
      },
      {
        fullname: <Project name="Karthik" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        contactnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8645433243456
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        fathername: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Kiran
          </MDTypography>
        ),
        fathernumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23456787654
          </MDTypography>
        ),
        bloodgroup: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            O+ve
          </MDTypography>
        ),
        checkindate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            25-09-2021
          </MDTypography>
        ),
        email: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            kiran33@gmail.com
          </MDTypography>
        ),
        occupation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Software
          </MDTypography>
        ),
        workaddress: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Hyderabad
          </MDTypography>
        ),
        worknumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            987654334567
          </MDTypography>
        ),
        permanentaddress: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Vijayawada
          </MDTypography>
        ),
        roomrent: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7000
          </MDTypography>
        ),
        securitydeposit: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2000
          </MDTypography>
        ),
        transactionid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            87654323456788
          </MDTypography>
        ),
        nameofmanager: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Michael
          </MDTypography>
        ),
      },
    ],
  };
}
