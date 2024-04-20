import { auth } from "@/auth";

const OverviewPage = async () => {
  const session = await auth();
  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default OverviewPage;
