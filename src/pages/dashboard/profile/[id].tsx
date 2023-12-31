import { useRouter } from 'next/router';
import Loading from '../../../components/Loading';
import UserDetail from '../../../components/UserDetail';
import useUserById from '../../../hooks/useUserById';
import LensModule from '../../../modules/Lens/LensModule';

function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const user = useUserById(id as string);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      {user && (
        <>
          <div className=' -mx-6 -mt-6 '>
            <p className='flex py-2 px-6 items-center text-2xl font-medium tracking-wider mb-8 border-b w-full border-gray-700 md:px-8 '>
              Profile <span className='text-gray-100 ml-1'> {user.handle} </span>
            </p>
          </div>
          <div>
            <div className='mb-6'>
              <UserDetail user={user} score={0} />
            </div>
            <div className='mb-6'>
              <LensModule address={user.address} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
