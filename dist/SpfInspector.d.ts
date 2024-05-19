import { Report } from "./Report";
type Search = {
    ips: string[];
    includes: string[];
    domains: string[];
};
declare const SpfInspector: (domain: string, search?: Partial<Search> & {
    maxDepth?: number;
}, stopOnMatch?: boolean) => Promise<Report>;
export default SpfInspector;
