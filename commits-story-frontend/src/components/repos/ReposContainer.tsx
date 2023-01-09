import { ChangeEventHandler } from 'react';
import { Repo } from '../../types/types'

function ReposContainer(props: { repos: Repo[], onChangeRepo: ChangeEventHandler } ) {
  const { repos, onChangeRepo } = props;
  const reposOptions = repos.map(repo => {
    return <option 
      selected={repo.name === import.meta.env.VITE_INITIAL_REPO}
      key={repo.id}
      value={repo.name}>
        {repo.name}
    </option>;
  });
  return (
    <form className="w-full p-5">
      <fieldset>
        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
          <label className="sr-only">My field</label>
          <select className="appearance-none w-full py-1 px-2 bg-white" onChange={onChangeRepo}>
            {reposOptions}
          </select>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default ReposContainer;
