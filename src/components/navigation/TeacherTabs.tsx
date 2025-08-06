import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Users, 
  FileText, 
  UserPlus, 
  BarChart3, 
  Plus, 
  Check, 
  X, 
  Eye, 
  Edit3, 
  Trash2,
  Upload
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const TeacherTabs: React.FC = () => {
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDescription, setNewRoomDescription] = useState('');

  // Mock data ajustado para escala de 1000 pontos
  const classStats = [
    { turma: 'Turma A', media: 850, alunos: 25 },
    { turma: 'Turma B', media: 780, alunos: 22 },
    { turma: 'Turma C', media: 820, alunos: 28 },
  ];

  const competencyStats = [
    { competencia: 'Argumentação', turmaA: 170, turmaB: 156, turmaC: 164 },
    { competencia: 'Coesão', turmaA: 160, turmaB: 150, turmaC: 158 },
    { competencia: 'Gramática', turmaA: 176, turmaB: 164, turmaC: 170 },
    { competencia: 'Repertório', turmaA: 164, turmaB: 152, turmaC: 160 },
    { competencia: 'Proposta', turmaA: 172, turmaB: 160, turmaC: 166 }
  ];

  const monthlyProgress = [
    { mes: 'Jan', turmaA: 750, turmaB: 700, turmaC: 720 },
    { mes: 'Fev', turmaA: 780, turmaB: 730, turmaC: 750 },
    { mes: 'Mar', turmaA: 820, turmaB: 750, turmaC: 780 },
    { mes: 'Abr', turmaA: 850, turmaB: 780, turmaC: 820 },
  ];

  const themeDistribution = [
    { name: 'Tecnologia', value: 30, color: 'hsl(var(--launch-wine-dark))' },
    { name: 'Meio Ambiente', value: 25, color: 'hsl(var(--launch-green-gray))' },
    { name: 'Sociedade', value: 20, color: 'hsl(var(--launch-red-dark))' },
    { name: 'Educação', value: 15, color: 'hsl(var(--launch-beige-yellow))' },
    { name: 'Outros', value: 10, color: 'hsl(var(--launch-beige-light))' }
  ];

  const pendingRequests = [
    { name: 'Ana Silva', email: 'ana@email.com', turma: 'Turma A', data: '2024-08-05' },
    { name: 'Carlos Santos', email: 'carlos@email.com', turma: 'Turma B', data: '2024-08-06' },
    { name: 'Maria Oliveira', email: 'maria@email.com', turma: 'Nova Turma', data: '2024-08-07' }
  ];

  const myContents = [
    { 
      titulo: 'Técnicas de Argumentação', 
      tipo: 'Vídeo', 
      turmas: ['Turma A', 'Turma B'], 
      criado: '2024-07-20',
      visualizacoes: 45
    },
    { 
      titulo: 'Estrutura da Redação ENEM', 
      tipo: 'PDF', 
      turmas: ['Turma A'], 
      criado: '2024-07-15',
      visualizacoes: 32
    },
    { 
      titulo: 'Coesão e Coerência', 
      tipo: 'Apresentação', 
      turmas: ['Turma B', 'Turma C'], 
      criado: '2024-07-10',
      visualizacoes: 28
    }
  ];

  const handleCreateRoom = () => {
    if (newRoomName.trim()) {
      console.log('Nova sala criada:', { name: newRoomName, description: newRoomDescription });
      setNewRoomName('');
      setNewRoomDescription('');
    }
  };

  const averageTotal = classStats.reduce((sum, cls) => sum + cls.media, 0) / classStats.length;

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-yeseva text-primary">Dashboard do Professor</h1>
          <p className="text-muted-foreground">Gerencie suas turmas e conteúdos</p>
        </div>
        <Button className="bg-primary hover:bg-accent">
          <Plus className="h-4 w-4 mr-2" />
          Nova Atividade
        </Button>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="border-launch-beige-light">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-launch-green-gray" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">75</div>
            <p className="text-xs text-muted-foreground">Em 3 turmas ativas</p>
          </CardContent>
        </Card>

        <Card className="border-launch-beige-light">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Redações Corrigidas</CardTitle>
            <FileText className="h-4 w-4 text-launch-red-dark" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">142</div>
            <p className="text-xs text-muted-foreground">+8 esta semana</p>
          </CardContent>
        </Card>

        <Card className="border-launch-beige-light">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solicitações Pendentes</CardTitle>
            <UserPlus className="h-4 w-4 text-launch-beige-yellow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-xs text-muted-foreground">Novos alunos aguardando</p>
          </CardContent>
        </Card>

        <Card className="border-launch-beige-light">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{Math.round(averageTotal)}</div>
            <p className="text-xs text-muted-foreground">+23 pontos este mês</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="notas" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="notas">Notas por Turma</TabsTrigger>
          <TabsTrigger value="conteudos">Conteúdos</TabsTrigger>
          <TabsTrigger value="pedidos">Pedidos de Entrada</TabsTrigger>
        </TabsList>

        {/* Aba de Notas por Turma */}
        <TabsContent value="notas" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico de Competências */}
            <Card className="border-launch-beige-light">
              <CardHeader>
                <CardTitle className="font-yeseva text-primary">Notas por Competência</CardTitle>
                <CardDescription>Desempenho detalhado por turma (máx. 200 pontos cada)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={competencyStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="competencia" />
                    <YAxis domain={[0, 200]} />
                    <Tooltip />
                    <Bar dataKey="turmaA" fill="hsl(var(--launch-wine-dark))" name="Turma A" />
                    <Bar dataKey="turmaB" fill="hsl(var(--launch-red-dark))" name="Turma B" />
                    <Bar dataKey="turmaC" fill="hsl(var(--launch-green-gray))" name="Turma C" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Evolução Temporal */}
            <Card className="border-launch-beige-light">
              <CardHeader>
                <CardTitle className="font-yeseva text-primary">Evolução das Turmas</CardTitle>
                <CardDescription>Progresso mensal por turma (máx. 1000 pontos)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis domain={[0, 1000]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="turmaA" stroke="hsl(var(--launch-wine-dark))" strokeWidth={2} />
                    <Line type="monotone" dataKey="turmaB" stroke="hsl(var(--launch-red-dark))" strokeWidth={2} />
                    <Line type="monotone" dataKey="turmaC" stroke="hsl(var(--launch-green-gray))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Distribuição de Temas */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Distribuição de Temas Trabalhados</CardTitle>
              <CardDescription>Análise dos temas mais abordados nas redações</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={themeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {themeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Gerenciar Conteúdos */}
        <TabsContent value="conteudos" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-yeseva text-primary">Meus Conteúdos</h2>
            <Button className="bg-primary hover:bg-accent">
              <Upload className="h-4 w-4 mr-2" />
              Adicionar Conteúdo
            </Button>
          </div>

          <div className="grid gap-4">
            {myContents.map((content, index) => (
              <Card key={index} className="border-launch-beige-light">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{content.titulo}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>Tipo: {content.tipo}</span>
                        <span>Criado: {content.criado}</span>
                        <span>{content.visualizacoes} visualizações</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {content.turmas.map((turma, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {turma}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba de Solicitações */}
        <TabsContent value="pedidos" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-yeseva text-primary">Solicitações de Entrada</h2>
            <Button className="bg-primary hover:bg-accent" onClick={() => {}}>
              <Plus className="h-4 w-4 mr-2" />
              Criar Nova Sala
            </Button>
          </div>
          
          <div className="grid gap-4">
            {pendingRequests.map((request, index) => (
              <Card key={index} className="border-launch-beige-light">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{request.name}</h3>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>Turma solicitada: {request.turma}</span>
                        <span>Data: {request.data}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-success border-success">
                        <Check className="h-4 w-4 mr-1" />
                        Aceitar
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive border-destructive">
                        <X className="h-4 w-4 mr-1" />
                        Recusar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulário para criar nova sala */}
          <Card className="border-launch-beige-light max-w-2xl">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Criar Nova Sala</CardTitle>
              <CardDescription>Configure uma nova sala de aula virtual</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="room-name">Nome da Sala</Label>
                <Input
                  id="room-name"
                  placeholder="Ex: Redação ENEM 2024 - Turma D"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                  className="border-launch-beige-light"
                />
              </div>
              <div>
                <Label htmlFor="room-description">Descrição</Label>
                <Input
                  id="room-description"
                  placeholder="Descrição da sala e objetivos"
                  value={newRoomDescription}
                  onChange={(e) => setNewRoomDescription(e.target.value)}
                  className="border-launch-beige-light"
                />
              </div>
              <Button 
                onClick={handleCreateRoom}
                className="w-full bg-primary hover:bg-accent"
                disabled={!newRoomName.trim()}
              >
                <Plus className="h-4 w-4 mr-2" />
                Criar Sala
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};