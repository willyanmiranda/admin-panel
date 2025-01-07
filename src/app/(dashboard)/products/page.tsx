import { Tabs } from '@/components/ui/tabs';
import TableHeaderSection from '@/templates/products-page/table-header-section/index';
import TableBodySection from "@/templates/products-page/table-body-section";
export default async function ProductsPage() {

  return (
    <Tabs defaultValue="all">
      <TableHeaderSection/>
      <TableBodySection />
    </Tabs>
  );
}
