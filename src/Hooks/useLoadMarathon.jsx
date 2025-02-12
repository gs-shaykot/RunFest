import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const useLoadMarathon = () => {
    const axiosSec = useSecure()
    const { isPending,isLoading, data: AllMarathon = [] } = useQuery({
        queryKey: ['AllMarathon'],
        queryFn: async () => {
            const res = await axiosSec.get('/marathons')
            console.log(res)
            return res.data
        }
    })
    if (isLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return {AllMarathon,isLoading,isPending} // here sending the AllMarathon as a object and 
};

export default useLoadMarathon;