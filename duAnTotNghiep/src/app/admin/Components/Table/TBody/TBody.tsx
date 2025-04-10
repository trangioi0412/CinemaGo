import React from "react";

const TBody = ({ icon, contents }: { icon?: any; contents: string }) => {
  return (
    <tr>
      <td>
        {icon} {contents}
      </td>
    </tr>
  );
};

export default TBody;
