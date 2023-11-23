import {
  Navbar,
  IconButton,
  Card,
  Input,
  Button,
  Typography,
  Select,
   Option
} from "@material-tailwind/react";
import { DatePicker, Space, message } from 'antd';
import { BellIcon, TruckIcon } from "@heroicons/react/24/solid";
import { FileInput, Label } from 'flowbite-react';
import moment from "moment/moment";
import { useState } from "react";


const UserHome = () => {

  // States
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [shippingDate, setShippingDate] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  // const [vendor, setVendor] = useState('');


  //  

  const disabledDate = current => {
    // Disable dates before today
    if (current && current < moment().startOf('day')) {
      return true;
    }
    
    // Disable dates within the next 3 days
    if (current && current <= moment().add(5, 'days').endOf('day')) {
      return true;
    }
    
    return false;
  };

  const handleSubmit = () => {
    if(!productName || !quantity || !shippingDate || !pdfFile){
      if(!productName) return message.error("Product name field empty");
      if(!quantity) return message.error("Quantity field empty");
      if(!shippingDate) return message.error("Shipping date field is empty");
      if(!pdfFile) return message.error("Document required");
    }
    const data = {
      productName,
      quantity,
      shippingDate,
      pdfFile,
    }
    console.log(data);
  }

  return (
    <div>
      <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 my-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Cargoa
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="white">
            <TruckIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="white">
            
            <BellIcon className="h-4 w-4" />
            <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900"></div>
          </IconButton>
        </div>
        {/* <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div> */}
      </div>
    </Navbar>


    <Card color="transparent" shadow={false} className="flex items-center justify-center my-10">
      <Typography variant="h4" color="blue-gray">
      RapidDelivery
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
      Your Instant Vendor Connection
      </Typography>
      <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-5">
            Product Name
          </Typography>
          <Input
            size="lg"
            type="text"
            placeholder="example"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setProductName(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-5">
            Quantity
          </Typography>
          <Input
            size="lg"
            type="number"
            placeholder="10"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-5">
            Date of Shipping
          </Typography>
          <Space direction="vertical">

          <DatePicker disabledDate={disabledDate} onChange={(date, dateString) => setShippingDate(dateString)}/>
          </Space>
          <Typography variant="h6" color="blue-gray" className="-mb-5">
            Vendor
          </Typography>
          <Select label="Select Vendor">
          <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>

        <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file"  accept=".pdf"
      onChange={(e) => setPdfFile(e.target.files[0])}
      // helperText="A profile picture is useful to confirm your are logged into your account" 
      />

        <Button className="mt-6" fullWidth onClick={handleSubmit}>
        Send to Vendor
        </Button>
      </div>
    </Card>
    </div>
  )
}

export default UserHome

