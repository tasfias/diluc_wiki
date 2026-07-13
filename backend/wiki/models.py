from django.db import models

class Character(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)  #url /characters/diluc
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='characters/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Section(models.Model):
    """A wiki page is made of sections e.g. 'Introduction', 'Story', 'Trivia'"""
    character = models.ForeignKey(Character, related_name='sections', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    order = models.PositiveIntegerField(default=0)  #order sections appear

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.character.name} — {self.title}"