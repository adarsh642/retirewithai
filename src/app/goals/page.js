import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';

export default function GoalsPage() {
  return (
    <div className="goals-page bg-[var(--background-color)] min-h-screen" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
    
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');`}</style>

      {/* Page-scoped CSS variables and glow utilities */}
      <style>{`
        .goals-page {
          --primary-color: #7f06f9;
          --secondary-color: #36214a;
          --accent-color: #ad8ecc;
          --background-color: #1a1023;
        }
        .glow {
          box-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 40px var(--primary-color);
        }
        .card-glow {
          box-shadow: 0 0 2px rgba(127, 6, 249, 0.5), 0 0 5px rgba(127, 6, 249, 0.4), 0 0 10px rgba(127, 6, 249, 0.3);
        }
        .progress-bar-glow {
          box-shadow: 0 0 3px rgba(127, 6, 249, 0.7), 0 0 6px rgba(127, 6, 249, 0.5);
        }
      `}</style>

      <div className="relative flex min-h-screen w-full dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow">
          {/* Reuse existing sidebar */}
          <Navbar />
          <div className="flex flex-1 flex-col">
            <Topbar />
            <main className="flex-1 px-16 py-12">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold leading-tight tracking-tight text-white">Your Goals &amp; Milestones</h2>
                  <p className="text-lg font-normal leading-normal text-[var(--accent-color)]">Track progress for every financial goal alongside retirement.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* Card 1 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-transparent bg-slate-900/50 p-6 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-slate-900/70 card-glow">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <div
                      className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBryd42w7xlgjolELogGL0F2NUGeq2syjNFEQ1lBWgICnZfsOcwEvSTRnHVssgulP0WHgZ7HkOAmmtTZo_EEvZwTe06alkzD0RKcRgu9_z9nze3bBp39NjpSeBwW5ZT6oHOqF-xv47k2jQQ5XltFA2H19ocbp6mag9JhQ3jy0zChvfXkzLqiXkeX6IuG1UmX8t29I7xWTBF-C_M7IIK2XFoy6qy_E4oEjbuon3ziZBwklLRjyoWoMDsAcv2d8VzlNQ6RdkBzdYw6uw")' }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white">Buy a House by 2032</h3>
                    <div className="h-2.5 w-full rounded-full bg-[var(--secondary-color)]">
                      <div className="h-2.5 rounded-full bg-[var(--primary-color)] progress-bar-glow" style={{ width: '25%' }}></div>
                    </div>
                    <p className="text-sm font-normal text-[var(--accent-color)]">
                      <span className="font-semibold text-white">AI Tip:</span> Consider a fixed-rate mortgage for stability.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-transparent bg-slate-900/50 p-6 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-slate-900/70 card-glow">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <div
                      className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLNvTaCzfLEr3mB25ExUv2j-Ppbvxo1hrK4TfkMNRDLNbvUhFLf7d88lPGL8lT4CPtiy1PGtqE2nBGeZMds9n1OUgrPnu-CPBcQ6SaKgQxoglZwv1IowQ5MO4dJY6r1w_NW0JnvUQVzUcV3rXDeoN8lRf0Hyfo4-Qc4BfzwBR0QGNCPjh-ankEcQrqU0Kfzr-mHsr8ANhHpBuD7GCgRMz_zA5IhKXcBFYgnN50r0_GV-MLxJR9DYbQupkeFpB1LgYNuXimeJuNMlM")' }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white">Child’s Education</h3>
                    <div className="h-2.5 w-full rounded-full bg-[var(--secondary-color)]">
                      <div className="h-2.5 rounded-full bg-[var(--primary-color)] progress-bar-glow" style={{ width: '50%' }}></div>
                    </div>
                    <p className="text-sm font-normal text-[var(--accent-color)]">
                      <span className="font-semibold text-white">AI Tip:</span> Start a dedicated education savings account.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-transparent bg-slate-900/50 p-6 transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-slate-900/70 card-glow">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <div
                      className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMk4k1WyEardmrvbmvcCY8q_aUxO2XMFofVXb9rLhjChIjMg02U5KI5uCQhvz9UTToBLjKspiXI7TbdFY11wQ8-fxJxQSlUmJayWilrSvqx8UsgmybDCU7P-JIOaBtswSINGFL6e6PS523zVQaXCNu_3sQgmTpNMWT1FbmxuGQJrHAN42dKb_Ji8351jqIo2p2KO4Dh8lQ5kBbsLiF07a_2VcYNA6cgyFjsQ1Jkrn-JA-1u-oxN6yfkp9j1Ge8BLSFlNqANWNqlOM")' }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white">Retirement</h3>
                    <div className="h-2.5 w-full rounded-full bg-[var(--secondary-color)]">
                      <div className="h-2.5 rounded-full bg-[var(--primary-color)] progress-bar-glow" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-sm font-normal text-[var(--accent-color)]">
                      <span className="font-semibold text-white">AI Tip:</span> Review your asset allocation annually.
                    </p>
                  </div>
                </div>

                {/* Add New Goal */}
                <button className="group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-[var(--secondary-color)] bg-slate-900/20 p-6 text-center transition-all duration-300 hover:border-[var(--primary-color)] hover:bg-slate-900/50">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--primary-color)] group-hover:text-white glow">
                    <span className="material-symbols-outlined text-5xl"> add </span>
                  </div>
                  <p className="text-lg font-semibold text-white">Add New Goal</p>
                </button>
              </div>

              {/* Timeline */}
              <div className="mt-16">
                <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-white">Timeline View</h2>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--secondary-color)]"></div>
                  <div className="space-y-12">
                    {/* Today */}
                    <div className="relative flex items-start">
                      <div className="absolute -left-3.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-color)] ring-8 ring-[var(--background-color)]">
                        <span className="material-symbols-outlined text-lg text-white"> schedule </span>
                      </div>
                      <div className="ml-10">
                        <h3 className="text-xl font-bold text-white">Today</h3>
                        <p className="text-md font-normal text-[var(--accent-color)]">Current Date</p>
                      </div>
                    </div>

                    {/* Checkpoint 1 */}
                    <div className="relative flex items-start">
                      <div className="absolute -left-3.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--secondary-color)] ring-8 ring-[var(--background-color)]">
                        <span className="material-symbols-outlined text-lg text-white"> flag </span>
                      </div>
                      <div className="ml-10">
                        <h3 className="text-xl font-bold text-white">Goal Checkpoint 1</h3>
                        <p className="text-md font-normal text-[var(--accent-color)]">2026</p>
                      </div>
                    </div>

                    {/* Checkpoint 2 */}
                    <div className="relative flex items-start">
                      <div className="absolute -left-3.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--secondary-color)] ring-8 ring-[var(--background-color)]">
                        <span className="material-symbols-outlined text-lg text-white"> flag </span>
                      </div>
                      <div className="ml-10">
                        <h3 className="text-xl font-bold text-white">Goal Checkpoint 2</h3>
                        <p className="text-md font-normal text-[var(--accent-color)]">2029</p>
                      </div>
                    </div>

                    {/* Checkpoint 3 */}
                    <div className="relative flex items-start">
                      <div className="absolute -left-3.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--secondary-color)] ring-8 ring-[var(--background-color)]">
                        <span className="material-symbols-outlined text-lg text-white"> flag </span>
                      </div>
                      <div className="ml-10">
                        <h3 className="text-xl font-bold text-white">Goal Checkpoint 3</h3>
                        <p className="text-md font-normal text-[var(--accent-color)]">2032</p>
                      </div>
                    </div>

                    {/* Retirement */}
                    <div className="relative flex items-start">
                      <div className="absolute -left-3.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--secondary-color)] ring-8 ring-[var(--background-color)]">
                        <span className="material-symbols-outlined text-lg text-white"> stars </span>
                      </div>
                      <div className="ml-10">
                        <h3 className="text-xl font-bold text-white">Retirement Age</h3>
                        <p className="text-md font-normal text-[var(--accent-color)]">2055</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
