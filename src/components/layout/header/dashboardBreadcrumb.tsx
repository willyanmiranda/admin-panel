"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const DashboardBreadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter( path => path );

  return ( 
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {
          pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`
            return (
              <>
                <BreadcrumbSeparator/>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink asChild>
                    <Link href={href} className="capitalize">{link}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default DashboardBreadcrumb