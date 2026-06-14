import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, Circle, Clock, Plus, Trash2, 
  Settings, Play, Pause, RotateCcw, Flame, Check, AlertCircle, ChevronRight, Sliders, LayoutGrid, ListTodo
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Task, ViewType } from '../types';

export function WorkspacePreview() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Refactor typography layout parameters', category: 'Inbox', priority: 'high', createdAt: '10m ago' },
    { id: '2', title: 'Audit button hover state drop shadows for glows', category: 'In Progress', priority: 'medium', createdAt: '2h ago' },
    { id: '3', title: 'Complete white surface lighting matrix', category: 'Inbox', priority: 'low', createdAt: '1d ago' },
    { id: '4', title: 'Establish Plus Jakarta Sans default scale hierarchies', category: 'Done', priority: 'high', createdAt: '2d ago' },
  ]);

  const [activeView, setActiveView] = useState<ViewType>('list');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [showNotification, setShowNotification] = useState<string | null>(null);

  // Focus Timer States
  const [timerStatus, setTimerStatus] = useState<'idle' | 'running' | 'paused'>('idle');
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto clean up focus timer
  useEffect(() => {
    if (timerStatus === 'running') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setTimerStatus('idle');
            triggerAlert('Focus period finished! Excellent work.');
            return 1500;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerStatus]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const triggerAlert = (message: string) => {
    setShowNotification(message);
    setTimeout(() => {
      setShowNotification(null);
    }, 4000);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const taskItem: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle.trim(),
      category: 'Inbox',
      priority: newTaskPriority,
      createdAt: 'Just now'
    };

    setTasks([taskItem, ...tasks]);
    setNewTaskTitle('');
    triggerAlert(`Task "${taskItem.title.substring(0, 15)}..." added successfully.`);
  };

  const toggleTaskCategory = (id: string) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        const nextMap: Record<Task['category'], Task['category']> = {
          'Inbox': 'In Progress',
          'In Progress': 'Done',
          'Done': 'Inbox'
        };
        const nextCat = nextMap[task.category];
        return { ...task, category: nextCat };
      }
      return task;
    }));
  };

  const deleteTask = (id: string, name: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
    triggerAlert(`Deleted "${name.substring(0, 15)}...".`);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-zinc-50 border border-zinc-200 text-zinc-900 font-semibold';
      case 'medium': return 'bg-zinc-50 border border-zinc-100 text-zinc-700';
      case 'low': return 'bg-zinc-50/50 text-zinc-450 border border-transparent';
    }
  };

  return (
    <div id="workspace-simulator" className="w-full bg-transparent p-0 rounded-2xl">
      {/* Outer Browser Window Frame */}
      <div className="overflow-hidden border border-zinc-200 rounded-2xl bg-white flex flex-col min-h-[460px] shadow-lg">
        {/* Top Control Bar of Workspace */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-150 bg-zinc-50 p-4 gap-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-100" />
            </div>
            <span className="h-4 w-px bg-zinc-200" />
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#0f172a]">
              GENERAL LANGUAGE / WORKSPACE
            </h4>
            <span className="inline-flex items-center bg-zinc-900 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-white">
              SIMULATOR_LIVE
            </span>
          </div>

          {/* View Toggles - Pure Editorial B&W Box */}
          <div className="flex items-center border border-zinc-200 rounded-lg p-1 self-stretch sm:self-auto justify-between gap-1 bg-zinc-100/60">
            <button
              id="view-list-toggle"
              onClick={() => setActiveView('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-sans text-[10px] font-bold uppercase tracking-wider transition ${
                activeView === 'list'
                  ? 'bg-white text-zinc-950 border border-zinc-200/80 shadow-xs'
                  : 'text-zinc-500 hover:text-black hover:bg-white/40'
              }`}
            >
              <ListTodo className="h-3 w-3" />
              List Log
            </button>
            <button
              id="view-board-toggle"
              onClick={() => setActiveView('board')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-sans text-[10px] font-bold uppercase tracking-wider transition ${
                activeView === 'board'
                  ? 'bg-white text-zinc-950 border border-zinc-200/80 shadow-xs'
                  : 'text-zinc-550 hover:text-black hover:bg-white/40'
              }`}
            >
              <LayoutGrid className="h-3 w-3" />
              Kanban
            </button>
            <button
              id="view-focus-toggle"
              onClick={() => setActiveView('focus')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-sans text-[10px] font-bold uppercase tracking-wider transition ${
                activeView === 'focus'
                  ? 'bg-white text-zinc-950 border border-zinc-200/80 shadow-xs'
                  : 'text-zinc-550 hover:text-black hover:bg-white/40'
              }`}
            >
              <Clock className="h-3 w-3" />
              Focus Timer
            </button>
          </div>
        </div>

        {/* Dynamic Notification Bubble inside Simulator (Zero glow, flat border) */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-zinc-900 border-b border-zinc-800 text-white text-xs px-4 py-3 flex items-center justify-between font-sans"
            >
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white" />
                <span className="font-sans font-bold uppercase tracking-wider text-[11px]">{showNotification}</span>
              </div>
              <button 
                onClick={() => setShowNotification(null)}
                className="text-[9px] uppercase tracking-widest text-zinc-450 hover:text-white font-bold"
              >
                [Dismiss]
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Work Area */}
        <div className="flex-1 p-4 bg-white flex flex-col">
          {/* LIST VIEW */}
          {activeView === 'list' && (
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {/* Add form with crisp rectangular design */}
              <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="DRAFT A NEW OBJECTIVE..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-xs font-sans text-zinc-850 placeholder-zinc-400 tracking-wide uppercase focus:border-zinc-500"
                />
                <div className="flex gap-2">
                  <select
                    id="priority-select"
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-xs font-sans font-bold uppercase tracking-wider text-zinc-800 focus:border-zinc-500"
                  >
                    <option value="low">LOW PRIORITY</option>
                    <option value="medium">MEDIUM PRIORITY</option>
                    <option value="high">HIGH PRIORITY</option>
                  </select>
                  <button
                    type="submit"
                    className="rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 px-5 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    ADD
                  </button>
                </div>
              </form>

              {/* Task Items list */}
              <div className="space-y-2 my-4 flex-1 overflow-y-auto max-h-[290px] pr-1">
                {tasks.length === 0 ? (
                  <div className="text-center py-12 border border-dashed border-zinc-200 bg-zinc-50/50 rounded-xl">
                    <AlertCircle className="h-6 w-6 text-zinc-400 mx-auto mb-2" />
                    <p className="font-sans text-xs uppercase tracking-widest font-bold text-zinc-500">All objectives cleared.</p>
                  </div>
                ) : (
                  tasks.map((task) => (
                    <motion.div
                      layout
                      key={task.id}
                      className="flex items-center justify-between p-3 border border-zinc-100 hover:border-zinc-300 bg-white transition-all rounded-xl group hover:shadow-xs"
                    >
                      <div className="flex items-center gap-3.5 min-w-0 flex-1">
                        <button
                          id={`complete-btn-${task.id}`}
                          onClick={() => toggleTaskCategory(task.id)}
                          className="text-zinc-900 hover:opacity-50 transition active:scale-95 flex-shrink-0"
                          title="Cycle phase (Inbox → In Progress → Done)"
                        >
                          {task.category === 'Done' ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 fill-emerald-50" />
                          ) : task.category === 'In Progress' ? (
                            <Circle className="h-5 w-5 text-zinc-500 fill-zinc-100" />
                          ) : (
                            <Circle className="h-5 w-5 text-zinc-300" />
                          )}
                        </button>
                        <div className="min-w-0">
                          <span className={`block font-sans text-xs leading-normal uppercase tracking-wide ${task.category === 'Done' ? 'line-through text-zinc-400' : 'text-zinc-850 font-bold'}`}>
                            {task.title}
                          </span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] uppercase font-bold text-zinc-400 font-sans">{task.createdAt}</span>
                            <span className="h-1 w-1 bg-zinc-300 rounded-full" />
                            <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold font-sans">STAGE: {task.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 border border-transparent rounded font-sans text-[9px] uppercase tracking-wider font-bold ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <button
                          id={`delete-btn-${task.id}`}
                          onClick={() => deleteTask(task.id, task.title)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-500 transition"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Status Hint */}
              <div className="border-t border-zinc-150 pt-3 flex items-center justify-between text-[10px] text-zinc-500 font-sans font-bold uppercase tracking-wider">
                <span>Completed: {tasks.filter(t => t.category === 'Done').length} of {tasks.length}</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 bg-zinc-500 rounded-full" />
                  Cycle status by clicking checkboxes
                </span>
              </div>
            </div>
          )}

          {/* KANBAN BOARD VIEW */}
          {activeView === 'board' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
              {(['Inbox', 'In Progress', 'Done'] as Task['category'][]).map((col) => {
                const list = tasks.filter((t) => t.category === col);
                return (
                  <div key={col} className="border border-zinc-200/60 bg-zinc-50/60 rounded-xl p-4 flex flex-col h-[320px]">
                    <div className="flex items-center justify-between mb-3 border-b border-zinc-200/80 pb-1.5">
                      <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#0f172a]">{col}</span>
                      <span className="bg-zinc-100 text-zinc-650 border border-zinc-200 rounded px-1.5 py-0.5 font-mono text-[9px] font-extrabold">{list.length}</span>
                    </div>

                    <div className="space-y-2 flex-1 overflow-y-auto pr-0.5">
                      {list.length === 0 ? (
                        <div className="h-full border border-dashed border-zinc-200 rounded-lg flex items-center justify-center p-4 bg-white/40">
                          <p className="font-sans text-[9px] uppercase tracking-widest text-zinc-400 text-center">Empty stage</p>
                        </div>
                      ) : (
                        list.map((task) => (
                          <div 
                            key={task.id} 
                            onClick={() => toggleTaskCategory(task.id)}
                            className="p-3 bg-white border border-zinc-150 rounded-lg cursor-pointer hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs"
                            title="Click to promote to next stage"
                          >
                            <p className="font-sans text-[11px] font-bold text-zinc-800 uppercase leading-normal mb-2">
                              {task.title}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className={`px-1.5 py-0.5 border border-transparent rounded text-[8px] uppercase font-bold tracking-wider ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                              <span className="text-[8px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-0.5 font-sans">
                                Cycle 
                                <ChevronRight className="h-2 w-2" />
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* FOCUS TIMER VIEW */}
          {activeView === 'focus' && (
            <div className="flex-1 flex flex-col items-center justify-center py-6">
              <div className="text-center space-y-4 max-w-sm w-full">
                {/* Modern circle indicator with soft inner lighting feel but zero glow */}
                <div className="mx-auto flex h-36 w-36 items-center justify-center border border-zinc-200 bg-zinc-50/60 rounded-full shadow-inner">
                  <div className="text-center">
                    <span id="focus-timer-clock" className="block font-mono text-3xl font-bold tracking-tight text-zinc-950">
                      {formatTime(timeLeft)}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                      {timerStatus === 'running' ? 'Active' : 'Session'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h5 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-900">DEEP WORK SPRINT</h5>
                  <p className="font-sans text-[11px] text-zinc-500 leading-normal">
                    A zero-distraction container keeping attention targeted to a single object.
                  </p>
                </div>

                {/* Controls (Zero glows, clean soft buttons) */}
                <div className="flex justify-center items-center gap-3">
                  <button
                    id="timer-reset-btn"
                    onClick={() => {
                      setTimerStatus('idle');
                      setTimeLeft(1500);
                    }}
                    className="border border-zinc-200 rounded-lg p-2.5 text-zinc-600 hover:text-black bg-white hover:bg-zinc-50 transition shadow-xs"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>

                  <button
                    id="timer-play-btn"
                    onClick={() => {
                      if (timerStatus === 'running') {
                        setTimerStatus('paused');
                      } else {
                        setTimerStatus('running');
                      }
                    }}
                    className="flex items-center gap-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-white transition"
                  >
                    {timerStatus === 'running' ? (
                      <>
                        <Pause className="h-3.5 w-3.5 fill-current" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5 fill-current" />
                        Start Sprint
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
