export const getVouchers = async () => {
    const res = await fetch("http://localhost:5000/vouchers");
    const data = await res.json();
    return data;
  };
  