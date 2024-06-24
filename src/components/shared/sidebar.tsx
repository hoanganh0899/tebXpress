import { navItems } from '@/constants/data';
import DashboardNav from './dashboard-nav';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="bg-green hidden h-screen w-64 flex-col overflow-y-auto overflow-x-hidden rounded-tr-[90px] border-r bg-[#293040] py-8 pl-5 lg:flex">
      <Link to="/" className="text-3xl font-bold text-[#D5B263]">
        <img
          src="../../../tebxpress-high-resolution-logo-transparent.png"
          className="h-3/4"
        />
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <DashboardNav items={navItems} />
      </div>
    </aside>
  );
}
