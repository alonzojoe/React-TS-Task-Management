import Card from "../../components/UI/Card";

const Dashboard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 py-14">
      <div className="flex flex-col justify-center space-y-8">
        <Card background="primary" width="w-full">
          <div className="text-white flex items-center gap-4">
            <h4 className="text-xl font-normal mb-4">Your task progress</h4>
          </div>
        </Card>
        <div>
          <h2 className="text-left text-textPrimary font-bold text-2xl">
            In Progress
          </h2>
          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="flex space-x-4">
              <Card background="lightPrimary" width="w-[200px]">
                <div className="text-white flex items-center gap-4">
                  <h4 className="text-xl font-normal mb-4">Go to Market</h4>
                </div>
              </Card>
              <Card background="lightPrimary" width="w-[200px]">
                <div className="text-white flex items-center gap-4">
                  <h4 className="text-xl font-normal mb-4">Buy Milk</h4>
                </div>
              </Card>
              <Card background="lightPrimary" width="w-[200px]">
                <div className="text-white flex items-center gap-4">
                  <h4 className="text-xl font-normal mb-4">Go back home</h4>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-left text-textPrimary font-bold text-2xl">
            Accomplished
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
