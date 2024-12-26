import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddForm from '../Components/AddForm';
import MyEve from '../Components/MyEve';
import MyApply from '../Components/MyApply';
import { Helmet } from 'react-helmet'; 

const Dashboard = () => {



  return (
    <div className="container mx-auto py-10">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Tabs className="flex w-11/12">
        {/* Sidebar on the left */}
        <TabList className="w-1/4 border-r border-gray-300 ">
          <Tab className="p-4 cursor-pointer border-b hover:bg-gray-200">Add Marathon</Tab>
          <Tab className="p-4 cursor-pointer border-b hover:bg-gray-200">My Marathon List</Tab>
          <Tab className="p-4 cursor-pointer border-b hover:bg-gray-200">My Apply List</Tab>
        </TabList>

        {/* Main content on the right */}
        <div className="w-3/4 p-4">
          <TabPanel>
            <h1 className='font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-4'>
              Running Marathons
            </h1>
            <AddForm></AddForm>
          </TabPanel>
          <TabPanel>
            <h1 className='font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-4'>
              My Events
            </h1>
            <MyEve></MyEve>
          </TabPanel>
          <TabPanel>
            <h1 className='font-bebas text-center text-4xl md:text-5xl font-semibold underline mb-4'>
              Applied List
            </h1>
            <MyApply></MyApply>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Dashboard;
