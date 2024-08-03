import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GovernmentApproval = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const updateApprovalStatus = async () => {
      try {
        const token = localStorage.getItem("access-token");
        if (!token) {
          throw new Error("No access token found");
        }

        const response = await axios.post(
          "https://api.guvenlisatkirala.com/api/approve-government/",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);
        navigate("/");
      } catch (error) {
        console.error("Error approving government:", error);
      }
    };

    updateApprovalStatus();
  }, [navigate]);

  return null;
};

export default GovernmentApproval;
