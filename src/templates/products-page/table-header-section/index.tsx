import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/common/button';
import Link from 'next/link';

const TableHeaderSection = async () => {
    return (
        <div className="flex items-center mt-2">
            <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="active">Ativos</TabsTrigger>
                <TabsTrigger value="draft">Rascunhos</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                    Arquivados
                </TabsTrigger>
            </TabsList>

            <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Exportar
                    </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <Link href="/products/create" className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Adicionar Produtos
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default TableHeaderSection