import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface SeoCardProps {
  title: string;
  value: any;
}

export const SeoCard = ({ title, value }: SeoCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center py-5">
        <p className="text-2xl">{value}</p>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
};

interface SeoCheckProps {
  title: string;
  value: boolean;
  description: string;
}

export const SeoCheckCard = ({ title, value, description }: SeoCheckProps) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent className="flex gap-4">
        <div>
          {!value ? (
            <CheckCircle2 className=" text-green-500 w-10 h-10" />
          ) : (
            <XCircle className=" text-red-500 w-10 h-10" />
          )}
        </div>
        <p className="text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};
interface InsightCardProps {
  title: string;
  value: any;
}

export const InsightCard = ({ title, value }: InsightCardProps) => {
  return (
    <Card className="flex bg-slate-100 flex-col justify-center items-center">
      <CardHeader className="text-2xl ">{value}ms</CardHeader>
      <CardContent className="flex gap-4">
        <p className="text-sm">{title}</p>
      </CardContent>
    </Card>
  );
};
